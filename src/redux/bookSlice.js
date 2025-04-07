import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [
        {
          id: "1",
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          category: "Fiction",
          description: "A story about the Jazz Age in the 1920s.",
          rating: 4.5
        },
        {
          id: "2",
          title: "Atomic Habits",
          author: "James Clear",
          category: "Self-Help",
          description: "A practical guide to building good habits and breaking bad ones.",
          rating: 4.8
        },
        {
          id: "3",
          title: "Clean Code",
          author: "Robert C. Martin",
          category: "Programming",
          description: "A handbook of agile software craftsmanship.",
          rating: 4.7
        },
        {
          id: "4",
          title: "Sapiens",
          author: "Yuval Noah Harari",
          category: "History",
          description: "An exploration of human history and evolution.",
          rating: 4.6
        },
        {
          id: "5",
          title: "Harry Potter and the Sorcerer’s Stone",
          author: "J.K. Rowling",
          category: "Fantasy",
          description: "A young wizard discovers his magical heritage.",
          rating: 4.9
        },
        {
          id: "6",
          title: "Rich Dad Poor Dad",
          author: "Robert T. Kiyosaki",
          category: "Finance",
          description: "Lessons on financial literacy and investing.",
          rating: 4.4
        },
        {
          id: "7",
          title: "You Don’t Know JS",
          author: "Kyle Simpson",
          category: "Programming",
          description: "A deep dive into the core mechanisms of JavaScript.",
          rating: 4.5
        },
        {
          id: "8",
          title: "The Alchemist",
          author: "Paulo Coelho",
          category: "Fiction",
          description: "A journey of self-discovery and destiny.",
          rating: 4.6
        },
        {
          id: "9",
          title: "The Subtle Art of Not Giving a F*ck",
          author: "Mark Manson",
          category: "Self-Help",
          description: "A counterintuitive guide to living a good life.",
          rating: 4.3
        },
        {
          id: "10",
          title: "Deep Work",
          author: "Cal Newport",
          category: "Productivity",
          description: "Rules for focused success in a distracted world.",
          rating: 4.7
        },
        {
          id: "11",
          title: "The Power of Now",
          author: "Eckhart Tolle",
          category: "Spirituality",
          description: "A guide to spiritual enlightenment and mindfulness.",
          rating: 4.4
        },
        {
          id: "12",
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          category: "Fiction",
          description: "A novel about racial injustice in the Deep South.",
          rating: 4.8
        },
        {
          id: "13",
          title: "The Lean Startup",
          author: "Eric Ries",
          category: "Business",
          description: "Innovative approaches to building startups efficiently.",
          rating: 4.5
        },
        {
          id: "14",
          title: "The Psychology of Money",
          author: "Morgan Housel",
          category: "Finance",
          description: "Timeless lessons on wealth, greed, and happiness.",
          rating: 4.6
        },
        {
          id: "15",
          title: "The Pragmatic Programmer",
          author: "Andy Hunt and Dave Thomas",
          category: "Programming",
          description: "Tips for becoming a better and more efficient developer.",
          rating: 4.7
        }
      ]
      
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
