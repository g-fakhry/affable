import { Component, OnInit } from '@angular/core';
import { InfluencerDataService } from '../influencer-service.service';
import { Influencer } from 'src/app/Influencer';
import { Hero } from './hero';

@Component({
  selector: 'app-influencers-list',
  templateUrl: './influencers-list.component.html',
  styleUrls: ['./influencers-list.component.less']
})
export class InfluencersListComponent implements OnInit {

  influencerCount: number;
  influencersList: Influencer[];
  allInfluencersList: Influencer[];
  topInfluencers: Influencer[];
  loading = true;
  interestsList: string[];

  likesAsc = true;
  countAsc = true;
  commentsAsc = true;

  sortedByComments = false;
  sortedByFollowers = false;
  sortedByLikes = false;

  selectedInterest = ' ';
  selectedFollowersCount = '0';
  bioKeyword = '';

  pageIndex = 0;
  pageSize = 10;
  startIndex = 0;
  endIndex = 10;

  constructor(private influencerDataService: InfluencerDataService) { }

  ngOnInit() {
    this.influencerDataService.getInfluencers().subscribe(res => {
      this.allInfluencersList = this.sortInfluencersFollowersCount(res);
      this.influencersList = this.allInfluencersList;
      this.topInfluencers = this.allInfluencersList.slice(0, 10);
      this.interestsList = this.getAllInterests(this.allInfluencersList);
      this.loading = false;
    });
  }

  sortInfluencersFollowersCount(list: Influencer[]) {
    return list.sort((a, b) => {
      return (a.followerCount > b.followerCount) ? -1 : (a.followerCount < b.followerCount) ? 1 : 0;
    });
  }

  sortInfluencersLikes(list: Influencer[]) {
    return list.sort((a, b) => {
      const likesA = a.stats.engagement.avgLikesRatio * a.followerCount;
      const likesB = b.stats.engagement.avgLikesRatio * b.followerCount;
      return (likesA > likesB) ? -1 : (likesA < likesB) ? 1 : 0;
    });
  }

  sortLikes(ascending: boolean) {
    this.sortedByComments = false;
    this.sortedByFollowers = false;
    this.sortedByLikes = true;
    this.influencersList = this.sortInfluencersLikes(this.influencersList);
    if (!ascending) {
      this.influencersList.reverse();
    }
  }

  sortComments(ascending: boolean) {
    this.sortedByComments = true;
    this.sortedByFollowers = false;
    this.sortedByLikes = false;
    this.influencersList = this.sortInfluencersComments(this.influencersList);
    if (!ascending) {
      this.influencersList.reverse();
    }
  }

  sortFollowersCount(ascending: boolean) {
    this.sortedByComments = false;
    this.sortedByFollowers = true;
    this.sortedByLikes = false;
    this.influencersList = this.sortInfluencersFollowersCount(this.influencersList);
    if (!ascending) {
      this.influencersList.reverse();
    }
  }

  sortInfluencersComments(list: Influencer[]) {
    return list.sort((a, b) => {
      const commentsA = a.stats.engagement.avgCommentsRatio * a.followerCount;
      const commentsB = b.stats.engagement.avgCommentsRatio * b.followerCount;
      return (commentsA > commentsB) ? -1 : (commentsA < commentsB) ? 1 : 0;
    });
  }

  ResetFiltersInfluencers() {
    this.influencersList = this.sortInfluencersFollowersCount(this.allInfluencersList);
    this.resetSorting();
    this.resetPagination();
  }


  filterInfluencers() {
    this.loading = true;
    this.influencersList = this.allInfluencersList.filter(influencer =>
      (this.selectedInterest === ' ' || influencer.stats.interests.includes(this.selectedInterest)) &&
      (influencer.followerCount >= Number(this.selectedFollowersCount)) &&
      influencer.biography.includes(this.bioKeyword.substring(1))
    );
    this.resetPagination();
    this.resetSorting();
    this.loading = false;
  }

  resetSorting() {
    this.sortedByComments = false;
    this.sortedByFollowers = false;
    this.sortedByLikes = false;
  }

  resetPagination() {
    this.startIndex = 0;
    this.endIndex = 10;
  }

  getAllInterests(list: Influencer[]) {
    const interestsList = [];
    list.forEach(influencer => {
      influencer.stats.interests.forEach(interest => {
        if (!interestsList.includes(interest)) {
          interestsList.push(interest);
        }
      });
    });
    return interestsList;
  }

  handlePageEvent(event) {
    this.pageIndex = event.pageIndex;
    this.startIndex = (this.pageIndex) * this.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
  }

}
