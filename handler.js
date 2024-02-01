const {nanoid} = require('nanoid');
const notes = require('./notes');

const addNotesHandler = (request, h)=>{
  const {title, tags, body} = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  // glue all data to array
  const newNote ={
    id, title, tags, body, createdAt, updatedAt,
  };
  notes.push(newNote);

  // finding out that notes is succeed to be filled into array by filter method
  // return the h response data with json format
  const isSuccess = notes.filter((note)=>note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response; // response has been filled with h.response parameter
  }
  // if failed outside if statement
  const response = h.response({
    status: 'failed',
    message: 'data gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// getting all data using get method
// we dont need request.payload to get data from client
// just push the response from notes variable and kaboom!!
const getAllNotesHandler = ()=>({
  status: 'success',
  data: {
    notes,
  },
});

const getSpecificNotesHandler = (request, h) => {
  const {id} = request.params;
  const note = notes.filter((n) => n.id === id)[0];
  if (note !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        note,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    catatan: 'catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editSpecificNotesHandler = (request, h) => {
  const {id} = request.params;
  const {title, tags, body} = request.payload;
  const updatedAt = new Date().toISOString();
  // find note id by index
  const index = notes.findIndex((n) => n.id === id);

  if (index != -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'catatan berhasil diubah',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'catatan gagal diperbaiki, id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteNotesById = (request, h) => {
  const {id} = request.params;
  const index = notes.findIndex((n) => n.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};


module.exports = {addNotesHandler,
  getAllNotesHandler,
  getSpecificNotesHandler,
  editSpecificNotesHandler,
  deleteNotesById,
};
