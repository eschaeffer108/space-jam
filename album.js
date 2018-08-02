class Album {
  //your code here
  constructor(id, title, artists){
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.tracks =[];
  }
  getTracks() {
    let theseTracks = " ";
   this.tracks.forEach((track) => {
     return theseTracks += track.title+'\n';
   });
   return theseTracks;
 }
 durationMin(){
   let total_ms = 0;
   this.tracks.forEach((track) =>{
     total_ms += parseFloat(track.duration_ms);
   });
   let minutes = total_ms/60000;
   return minutes.toFixed(2);
 }
  summary(){
    return 'Name: ' + this.title  +  '\nArtist: ' + this.artists + '\nDuration MS: '
    + this.durationMin()+'\nTracks: ' + this.getTracks();
  }
}

module.exports = Album;
