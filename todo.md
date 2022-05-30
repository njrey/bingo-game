### TODO

1. Where I left off

   - How do I save from the modal correctly?
   - formik validation?
   - SWR would be nice for caching+dedupe (now that react 18 strict is annoying)
   - Selected state: don't just display name at top in heading
   - Board Edit

     - Edit button with icon starts "Edit Mode"
     - Click again to turn off "Edit Mode"
     - Tile-By-Tile editing
     - Also: text area for mass edit
     - Validation: Char limit for tile
     - Tile-By-Tile updates text area and vice versa
     - Use chakra <Editable>?
     - Backend needs PUT by id

   - Backend
     - Validation
       - on tile length and board (25 max)
       - name is required
     - Learn flask app architecture
     - Fix CORS
     - Can I avoid cors? Run all in one port?
     - Faster way to refresh back-end code after change
   - Clean up fetches
     - Add error-handling
   - Board Setup V2
     - Show a sample board as they add items

1. iPad Css
   - somewhere between a large screen and a phone, add a mediaquery for ipads
1. Board array tuple type
   - Use TS to make our board array limited to 25 items
   - Tuple types may work: https://stackoverflow.com/questions/52489261/typescript-can-i-define-an-n-length-tuple-type
1. Handle long inputs for square text
   - char limit?
1. Circle for 'occupied' state
1. Calculate winner
1. Inputs to create board
   - tile by tile?
   - "generate board" button
1. Board setup input error
   - If board length != 25
   - Use popup modal says "Board is x tiles long, add/subtract y from input list instead of alert
1. Styling
   - Tailwind CSS?
   - Dark mode
1. Have a 'board setup state' and a 'play the game state'
   - We don't need both on the screen at the same time
1. Make it look better with styling, theme and animations
   - maybe even add some color
