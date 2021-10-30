import { PaymentDetails } from './payment-details.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http:HttpClient) { }

  formData: PaymentDetails = new PaymentDetails();
  readonly baseURL = "https://localhost:44337/api/PaymentDetails";

  list: PaymentDetails[];
  postPaymentDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetails[]);
  }
}



