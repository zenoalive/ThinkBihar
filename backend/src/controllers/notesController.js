import Note from "../models/Note.js";

export async function getAllnotes(req, res) {
     try {
          const notes = await Note.find() //sorts in descending order, new one at first
          if(!notes)
               res.status(404).json({message: 'Note not found'})
           res.status(200).json(notes);

     } catch (error) {
          console.log('Error in getAllNotes controller:', error)
          res.status(500).json({message: "Internal Server Error"})
     }
   
}

export async function getNoteById(req, res) {
     try {
          const note = await Note.findById(req.params.id)
          res.status(200).json(note);
     } catch (error) {
          console.log('Error in get a note controller:', error)
          res.status(500).json({message: "Internal Server Error"})
     }
}

export async function createNote(req, res) {
     try {
          const {title, content} = req.body
          const newNote = new Note({title, content})

          const savedNote = await newNote.save()
          res.status(201).json(savedNote)
          console.log("Note created successfully")
     } catch (error) {
          console.log("Error in createNote controller", error)
          res.status(500).json({message: "Internal Server Error"})

     }
}

export async function updateNote(req, res) {
     try {

           const {title, content} = req.body
           const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
           if(!updatedNote)
               return res.status(404).json({mesaage: 'User not found'})
           res.status(200).json(updatedNote)
          
     } catch (error) {
           console.log("Error in update Note controller", error)
           res.status(500).json({message: "Internal Server Error"})
     }
    
}

export async function deleteNote(req, res) {
     try {

           const {title, content} = req.body
           const deletedNote = await Note.findByIdAndDelete(req.params.id)
           if(!deletedNote)
               return res.status(404).json({mesaage: 'User not found'})
           res.status(200).json({message: "Note deleted successfully"})
          
     } catch (error) {
           console.log("Error in delete Note controller", error)
           res.status(500).json({message: "Internal Server Error"})
     }
}