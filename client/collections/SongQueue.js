// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

   initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.at(0).play();
      }
    });
    this.on('dequeue', function(){
      this.remove(this.at(0));
      this.at(0).play();
    });
   }

   // dequeue: function(){
   //  )
   // }

});
