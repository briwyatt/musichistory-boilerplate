var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic > by Alanis Moris*ette on the album Jagged Little Pill"

songs.push("Perfect Day > by Lou Reed on the album Transformer")
songs.unshift("Because I'm me > by The Avalanches on the album Wildflower")


for (var i = 0; i < songs.length; i++){
  songs[i] = songs[i].replace("*", "");
  songs[i] = songs[i].replace("@", "");
  songs[i] = songs[i].replace("(", "");
  songs[i] = songs[i].replace("!", "");
  songs[i] = songs[i].replace(">", "-");
}




console.log("songs",songs);
