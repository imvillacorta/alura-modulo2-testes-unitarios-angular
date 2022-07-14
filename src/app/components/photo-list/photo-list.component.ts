import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/service/photo-board.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  public photos$: Observable<Photo[]>;

  constructor(
    private photoBoardService: PhotoBoardService
  ) { }

  ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }

}