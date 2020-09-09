import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DownloadCvService {

    fileName = 'GEORGY_SAUKOV.pdf'

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    public downloadCv() {
        this.http.get("/assets/PERSONAL INFORMATION.pdf", { responseType: 'blob' }).subscribe((blob: Blob) => {
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, this.fileName);
            } else {
                const a = document.createElement('a');
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = this.fileName;
                a.click();
                setTimeout(() => {
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                }, 0)
            }
        }, (err) => {
            console.log("Download Error:", err);
        });

    }

}
