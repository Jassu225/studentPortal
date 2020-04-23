import { searchTypes } from '~/data';
import dbHandler from '~/utils/db-handler';
import isNaN from '~/utils/is-nan';

export const state = () => ({
  searchType: searchTypes.name,
  searchValue: '',
  searchDate: [],
  records: [],
  specificRecord: null,
});

export const mutations = {
  SET_SEARCH_TYPE(state, searchType) {
    state.searchType = searchType;
  },
  SET_SEARCH_VALUE(state, searchValue) {
    state.searchValue = searchValue;
  },
  SET_SEARCH_DATE(state, searchDate) {
    state.searchDate = searchDate;
  },
  SET_RECORDS(state, records) {
    state.records = records;
  },
  SET_SPECIFIC_RECORD(state, specificRecord) {
    state.specificRecord = specificRecord;
  },
};

const searchActionsMap = {
  [searchTypes.aadharNumber]: 'searchByAadharNumber',
  [searchTypes.name]: 'searchByName',
};

const isValidSearchType = type =>
  Object.keys(searchTypes)
    .reduce((isValid, key) => isValid || searchTypes[key] === type, false);

export const actions = {
  async searchByName({ state, commit }) {
    if (state.searchValue) {
      const records = await dbHandler.searchByName(state.searchValue);
      // console.log(records);
      commit('SET_RECORDS', records);
    }
  },
  async searchByAadharNumber({ state, commit }) {
    // debugger;
    const aadharNumber = parseInt(state.searchValue);
    if (!isNaN(aadharNumber)) {
      const record = await dbHandler.searchByAadharNumber(aadharNumber);
      // console.log(record);
      // debugger;
      commit('SET_SPECIFIC_RECORD', record);
    }
  },
  setSearchType({ commit }, searchType) {
    commit('SET_SEARCH_TYPE', searchType);
    commit('SET_SEARCH_VALUE', '');
    commit('SET_SEARCH_DATE', []);
    commit('SET_SPECIFIC_RECORD', null);
    commit('SET_RECORDS', []);
  },
  setSearchValue({ commit, dispatch, state }, searchValue) {
    commit('SET_SEARCH_VALUE', searchValue);
    // console.log('searchTypes --', searchTypes);
    // console.log('selected searchType---', state.searchType);
    // console.log(searchTypes.hasOwnProperty(state.searchType));
    if (isValidSearchType(state.searchType)) {
      dispatch(searchActionsMap[state.searchType]);
    }
  },
  setSearchDate({ commit }, searchDate) {
    commit('SET_SEARCH_VALUE', searchDate);
  },
};

export const getters = {
  searchType: state => state.searchType,
  searchValue: state => state.searchValue,
  searchDate: state => state.searchDate,
  records: state => state.records,
  specificRecord: state => state.specificRecord,
};
