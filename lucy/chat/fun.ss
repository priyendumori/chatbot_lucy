> topic fun {keep}

+ * (bore|bored|boring) *
- Ha Ha..! hilarious.\n^getJokes()
- rofl\n^getJokes()
- lol\n^getJokes()

+ [tell me] (something new|a fact|fact)
- this one's unbelievable.\n^getFacts()
- oh! this is interesting.\n^getFacts()

+ [what is the|give me the |the] meaning of (*)
- ^getMeaning(<cap>)

+ [give me|show me|show |give|what are|what are the|what is|what is the] (news|headlines) *
- in today's news:\n^getnews()
- the headlines are:\n^getnews()

+ [give me|show me|show |give ] [~good] (thoughts|thought)
- here's a nice one.\n^getThoughts()
- this one's my favourite.\n^getThoughts()
- you've got to like this one.\n^getThoughts()

< topic
