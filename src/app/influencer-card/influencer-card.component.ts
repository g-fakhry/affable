import { Component, OnInit, Input } from '@angular/core';

import { Influencer } from '../Influencer';

@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.less']
})
export class InfluencerCardComponent implements OnInit {

  @Input() influencer: Influencer;
  constructor() { }

  ngOnInit() { }

  handleImgError(event) {
    event.target.src = '../../assets/images/no-image-placeholder.jpg';
    return true;
  }

}
