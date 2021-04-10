import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "นายประเสริฐ มุ่งมานะ",
      no: "60070501000",
      faculty: "คณะสถาปัตยกรรมศาสตร์และการออกแบบ",
      department: "ภาควิชาวิศวกรรมคอมพิวเตอร์",
      year: 3,
      imagePath: "",
    },
    parties: [
      {
        name: "ที่ไว้ใจเทอว์",
        isAccept: 0,
        imageId: "",
      },
      {
        name: "ผ่อน",
        isAccept: 0,
        imageId: "",
      },
    ],
    studentConcil: [
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null,
        imageId: "",
      },
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null,
        imageId: "",
      },
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null,
        imageId: "",
      },
    ],
    isAllPartySelected: false,
    APIPath: "http://10.2.14.248:8080",
    token: null,
  },
  mutations: {
    partyAccept(state, changingParty) {
      state.parties.forEach((party) => {
        if (party === changingParty) {
          party.isAccept = 1;
        } else {
          party.isAccept = -1;
        }
      });
      state.isAllPartySelected = true;
    },
    partyDecline(state, changingParty) {
      let isNotAll = false;
      state.parties.forEach((party) => {
        if (party === changingParty) {
          party.isAccept = -1;
        }
        if (party.isAccept == 0) {
          isNotAll = true;
        }
      });
      if (!isNotAll) {
        state.isAllPartySelected = true;
      }
    },
    partyDeSelect(state, changingParty) {
      state.parties.forEach((party) => {
        if (party === changingParty) {
          party.isAccept = 0;
        }
      });
      state.isAllPartySelected = false;
    },
    setStudentSelectState(state, payload) {
      state.studentConcil.forEach((student) => {
        if (student === payload.student) {
          student.selectState = payload.selectState;
        }
      });
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setParty(state, payload) {
      payload.forEach((party) => {
        party.isAccept = 0;
      });
      state.parties = payload;
    },
    setCouncil(state, payload) {
      let council = [];
      payload.forEach((student) => {
        if(state.user.faculty === student.faculty){
          let newStudent = {};
          newStudent.name = student.firstname + " " + student.lastname;
          newStudent.faculty = student.faculty;
          newStudent.field = student.field;
          newStudent.imageId = student.imageId;
          newStudent.id = student.id;
          council.push(newStudent);
        }
        
      });
      state.studentConcil = council;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getParties(state) {
      return state.parties;
    },
    getConcil(state) {
      return state.studentConcil;
    },
    isAllPartySelected(state) {
      return state.isAllPartySelected;
    },
    getSelectedParty(state) {
      let selectedParty = null;
      state.parties.forEach((party) => {
        if (party.isAccept == 1) {
          selectedParty = party;
        }
      });
      return selectedParty;
    },
    isConcilAllSelected(state) {
      let result = true;
      state.studentConcil.forEach((student) => {
        if (student.selectState == null && student.faculty == state.user.faculty) {
          result = false;
        }
      });
      return result;
    },
    getAPIPath(state) {
      return state.APIPath;
    },
    getToken(state) {
      return state.token;
    },
  },
  actions: {},
  modules: {},
});
