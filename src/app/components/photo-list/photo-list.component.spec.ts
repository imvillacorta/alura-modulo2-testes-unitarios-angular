import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/service/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { of } from 'rxjs';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  // it('should create component', () => {
  //   expect(component).toBeTruthy();
  // });

  it('(D) should display board when data arrives', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos')
      .and.returnValue(of(photos));

      fixture.detectChanges();

    const board = fixture.nativeElement
      .querySelector('app-photo-board');

      const loader = fixture.nativeElement
      .querySelector('.loader');
      expect(board).not.toBeNull();
      expect(loader).toBeNull();
  });

  it('(D) should display loader while waiting for data', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos')
      .and.returnValue(null);

      fixture.detectChanges();

    const board = fixture.nativeElement
      .querySelector('app-photo-board');

      const loader = fixture.nativeElement
      .querySelector('.loader');
      expect(board).toBeNull();
      expect(loader).not.toBeNull();
  });

});
