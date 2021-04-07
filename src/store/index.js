import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "นายประเสริฐ มุ่งมานะ",
      no: "60070501000",
      faculty: "คณะวิศวกรรมศาสตร์",
      department: "ภาควิชาวิศวกรรมคอมพิวเตอร์",
      year: 3
    },
    parties:[
      {
        name: "ที่ไว้ใจเทอว์",
        isAccept: 0
      },
      {
        name: "ผ่อน",
        isAccept: 0
      }
    ],
    studentConcil: [
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null
      },
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null
      },
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null
      },
    ]
  },
  mutations: {
    partyAccept(state, changingParty){
      state.parties.forEach(party => {
        if (party === changingParty) {
          party.isAccept = 1;
        } else{
          party.isAccept = -1;
        }
      });

    },
    partyDecline(state, changingParty){
      state.parties.forEach(party => {
        if (party === changingParty) {
          party.isAccept = -1;
        }
      });
    },
    partyDeSelect(state, changingParty){
      state.parties.forEach(party => {
          if (party === changingParty) {
            party.isAccept = 0;
          }
      });
    },
    setStudentSelectState(state, payload){
      state.studentConcil.forEach(student => {
        if (student === payload.student) {
          student.selectState = payload.selectState;
          console.log(state.studentConcil)
        }
      });
    },
  },
  getters: {
    getUser(state){
      return state.user;
    },
    getParties(state){
      return state.parties;
    },
    getConcil(state){
      return state.studentConcil;
    }
  },
  actions: {},
  modules: {},
});
