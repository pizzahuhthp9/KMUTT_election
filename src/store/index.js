import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "นายประเสริฐ มุ่งมานะ",
      no: "60070501000",
      faculty: "คณะวิศวกรรมศาสตร์",
      department: "ภาควิชาวิศวกรรมคอมพิวเตอร์",
      year: 3,
    },
    parties: [
      {
        name: "ที่ไว้ใจเทอว์",
        isAccept: 0,
      },
      {
        name: "ผ่อน",
        isAccept: 0,
      },
    ],
    studentConcil: [
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null,
      },
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null,
      },
      {
        name: "นายมะลึก กึ๊กกึ๋ย",
        faculty: "ภาควิศวกรรมคอมพิวเตอร์",
        year: 1,
        selectState: null,
      },
    ],
    isAllPartySelected: false,
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
    isAllPartySelected(state){
      return state.isAllPartySelected;
    },
    getSelectedParty(state){
      let selectedParty = null;
      state.parties.forEach((party, index) => {
        if (party.isAccept == 1) {
          party.no = index + 1;
          selectedParty = party;
        }
      });
      return selectedParty;
    },
    isConcilAllSelected(state){
      let result = true;
      state.studentConcil.forEach(student => {
        if(student.selectState == null){
          result = false;
        }
      });
      return result;
    }
  },
  actions: {},
  modules: {},
});
