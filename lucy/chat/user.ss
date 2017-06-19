> topic user {keep}

+ my name is (*)
- hello <cap> . ^save("name",<cap>)
- Nice to meet you, <cap>! ^save("name",<cap>)
- What a lovely name..! ^save("name",<cap>)

+ [tell me|what is|do you know] my name 
- it is ^get("name")

< topic
