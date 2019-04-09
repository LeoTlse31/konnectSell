import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    title: new FormControl(""),        
    description: new FormControl(""),        
    location_venue_name: new FormControl(""),
    venue_name_full: new FormControl(""),  
    start_date: new FormControl(""),  
    end_date: new FormControl(""),
    organiser_name: new FormControl(""),  
    event_image: new FormControl("")
  });

  //Firestore CRUD actions example
  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Event")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateCoffeeOrder(data) {
    return this.firestore
      .collection("Event")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoffeeOrders() {
    return this.firestore.collection("Event").snapshotChanges();
  }

  deleteCoffeeOrder(data) {
    return this.firestore
      .collection("Event")
      .doc(data.payload.doc.id)
      .delete();
  }
}