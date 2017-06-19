> topic movie {keep}

+ [give me] details of movie (*)
- here it is: ^getMovie(<cap>)

+ movie
- type in the movie name and index of the property you want to know:\n^getMovieKeys()

+ movie (*) index (*) 
- ^getMovieAttribute(<cap1>,<cap2>)

< topic
