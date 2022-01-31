# Shelf

A Bookshelf app where users can search for and add books or albums to their shelves. 
![Peek 2021-10-24 22-13](https://user-images.githubusercontent.com/22431170/138624683-d339b16c-96e0-4a22-8ea7-59bc94902941.gif)


![Peek 2021-10-25 00-26](https://user-images.githubusercontent.com/22431170/138634690-093e8505-8672-4cbd-9979-270f5d25dd14.gif)

## APIs used
OpenLibrary and MusicBrainz
Framer motion for the animation

## Functionality

- Users have two screens which they can use, a Books screen and an Audio screen
 - For each screen users can use the search bar to search for the title of a book or album which they would like to add to their shelf
- A card will appear on the screen, indicating that the book/album was added to the shelf. The color of the cards is selected at random from a palette
- Users can drag the cards left and right to see which cards are available on the shelf
- Users can also delete any books/albums they wish by tapping the x on the card.

## Known Issues
- Currently text wrapping for longer titles is inconsistent, and leads to some text being cut off
- There are no artists that display on the album cards, which is a result of the formatting of the MusicBrainz api using a '-' in the name of an element in the JSON array. 
- There is a slight delay from when the user types in a query to search results being displayed. Currently the way around this is to continue to type the query
- The delay in search also leads to results sporadically switching
- The app does not scale well on mobile phones yet

## Future Functionality
- I hope to make this a community bookshelf, where users from all over can access the same site and add books or albums they want to share
- I also hope to add search by author/artist as well
- I will also be adding extra accessiblity features to make the app more usable by all

## Credits
CoderOne's video on how to make an autocompleting search bar
(https://www.youtube.com/watch?v=IlnmWntmUns)
StackOverflow
Framer Motion docs

## Notes
At the time of submission OpenLibrary was down



