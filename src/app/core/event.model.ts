export class FirebaseEventModel {
  title: string;          
  description: string;         
  location_venue_name: string;
  venue_name_full: string;   
  start_date: Date;   
  end_date : Date;
  organiser_name: string;  
  event_image: string;

  constructor(){
    this.title= "";          
    this.description= "";         
    this.location_venue_name= "";
    this.venue_name_full= "";   
    this.start_date = null;   
    this.end_date = null;
    this.organiser_name= "";  
    this.event_image= "";
  }
}
