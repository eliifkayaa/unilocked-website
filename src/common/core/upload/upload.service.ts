import { Injectable } from '@angular/core';
import * as tus from 'tus-js-client';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor() {}

  public upload(file: File) {
    var upload = new tus.Upload(file, {
      endpoint: 'http://localhost:3000/files',
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onBeforeRequest: function (req) {
        return new Promise<void>((resolve) => {
          var xhr = req.getUnderlyingObject();
          xhr.withCredentials = true;
          resolve();
        });
      },
      onError: function (error) {
        console.log('Failed because: ' + error);
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + '%');
      },
      onSuccess: function () {
        console.log(
          'Download %s from %s',
          (upload.file as File).name,
          upload.url
        );
      },
    });

    // Check if there are any previous uploads to continue.
    upload.findPreviousUploads().then(function (previousUploads) {
      // Found previous uploads so we select the first one.
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }

      // Start the upload
      upload.start();
    });
  }
}
