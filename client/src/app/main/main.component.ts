import {Component, OnInit} from '@angular/core';
import {Repository} from '../data/repository';
import {Subscription} from 'rxjs';
import {VkWall} from '../data/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  private photosVk: Array<VkWall> = [];
  private photoVk: Array<object> = [];
  private i: number;
  private timer: Subscription;
  private imgs: any;
  private height = window.innerHeight;
  private width = window.innerWidth;
  private widthImg = 'img100';
  private text1: Array<string>;
  private text2: Array<string>;
  private text3: Array<string>;
  private visible = false;
  private bigFoto = '';
  private path: string;
  private bigNews: string;
  private bigData: Date;

  constructor(private repository: Repository) {
  }

  ngOnInit(): void {
    this.repository.getVkPhoto().subscribe((rec: any) => {
      this.photosVk = rec.response.items;
      for (let j = 0; j < this.photosVk.length; j++) {
        this.photosVk[j].text = this.photosVk[j].text.replace(/https/g, '|');
        this.photosVk[j].text = this.photosVk[j].text.replace(/\n/g, '<br>');
        this.text2 = this.photosVk[j].text.split(/[[|\]]/g);
        this.photosVk[j].text = '';
        for (let k = 0; k < this.text2.length; k++) {
          if (this.text2[k].substr(0, 2) != 'id' && this.text2[k].substr(0, 4) != 'club') {
            if (this.text2[k].substr(0, 3) == '://') {
              this.text3 = this.text2[k].split(/<br>/, 1);
              for (let l = 0; l < this.text3.length; l++) {
                if (this.text3[l].substr(0, 3) == '://') {
                  this.text2[k] = this.text2[k].replace(this.text3[l], '<a target="_blank" href=https' + this.text3[l] + '>Ссылка</a>');
                }
              }
            }
            this.photosVk[j].text = this.photosVk[j].text + this.text2[k];
          }
        }
        console.log(this.photosVk[j]);
        // console.log(this.text3);
        // console.log(this.photosVk[j].attachments);
      }
    });

  }

  findBigestSizeImages(i: number, j: number){
    var bigIndex = 0;
    var bigSize: number;
    if (this.photosVk[i].attachments[j].photo.sizes[0].height > this.photosVk[i].attachments[j].photo.sizes[0].width){
      bigSize = this.photosVk[i].attachments[j].photo.sizes[0].height;
      for (let k = 1; k < this.photosVk[i].attachments[j].photo.sizes.length; k++) {
        if (this.photosVk[i].attachments[j].photo.sizes[k].height > bigSize){
          bigSize = this.photosVk[i].attachments[j].photo.sizes[k].height;
          bigIndex = k;
        }
      }
    }else{
      bigSize = this.photosVk[i].attachments[j].photo.sizes[0].width;
      for (let k = 1; k < this.photosVk[i].attachments[j].photo.sizes.length; k++) {
        if (this.photosVk[i].attachments[j].photo.sizes[k].width > bigSize){
          bigSize = this.photosVk[i].attachments[j].photo.sizes[k].width;
          bigIndex = k;
        }
      }
    }
    return bigIndex;
  }

  loadBigFoto(i: number, j: number) {
    this.height = window.innerHeight - 50;
    this.width = window.innerWidth - 50;
    this.visible = true;
    this.bigFoto = this.photosVk[i].attachments[j].photo.sizes[this.findBigestSizeImages(i, j)].url;
    this.bigNews = this.photosVk[i].text;
    this.bigData = this.photosVk[i].date;
    this.i = i;
  }

  loadNewBigFoto(i: number, j: number) {
    this.height = window.innerHeight - 50;
    this.width = window.innerWidth - 50;
    this.bigFoto = this.photosVk[i].attachments[j].photo.sizes[this.findBigestSizeImages(i, j)].url;
  }

  imgWidth(i: number) {
    if (this.photosVk[i].attachments.length > 1 && this.photosVk[i].attachments[1].type == 'photo') {
      this.widthImg = 'img50';
    } else {
      this.widthImg = 'img100';
    }
  }

  newsdirect(i: number) {
    if (!this.photosVk[i].copy_history) {
      this.path = 'item.attachments';
    }
    if (i % 2 == 0) {
      return 'news_post';
    } else {
      return 'news_post_revers';
    }
  }

  subText(text: string) {
    this.text1 = text.split(' ');
    if (this.text1.length > this.width / 30) {
      text = '';
      for (let j = 0; j < this.width / 30; j++) {
        text += this.text1[j] + ' ';
      }
      text += '...';
    }
    return text;
  }
}
