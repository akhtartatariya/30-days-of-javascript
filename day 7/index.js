const book={
    title:"chrestopher",
    author:"chris",
    year:2004,
    result:function() {
        console.log("book title is:-",this.title,"and author is:-",this.author)
    }
}

// console.log(book)
// console.log("book title is:-",book.title ,"and author is:-",book.author)

book.result()



const book2={
    title:"master",
    author:"steve jobs",
    year:2005,
    result:function(year) {
        this.year = year
        console.log(this.year)
        // console.log("book title is:-",this.title,"and author is:-",this.author)
    }
}
console.log(book2.result(1900))
console.log(book2)


const library={
    books:[
        {
            bookName:"someone",
            author:"someBody"
        },
        {
            bookName:"give up",
            author:"gives"
        },
        {
            bookName:"someoneElse",
            author:"someBodyElse"
        },
    ]
}   

console.log(library.books.map((val)=>val.bookName))


const book4={
    title:"chrestopher",
    author:"chris",
    year:2004,
    result:function (){
        return `book title is:-${this.title }, and author is:-${this.year}`
    }
}

console.log(book4.result())




const books={
    name:"axios",
    skill:"api calling",
    openSource:true
}

for (const key in books) {
    console.log("key:-",key , "value:-",books[key])
}

const keysAll=Object.keys(books)
console.log(keysAll)
const valuesAll=Object.values(books)
console.log(valuesAll)