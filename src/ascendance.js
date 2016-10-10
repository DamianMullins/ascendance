import defaults from './defaults';

export function ascendance (element, opts) {
  let options = {};


  /**
   * setup function
   */
  function setup () {
      options = {...defaults, ...opts};
  }

  // trigger initial setup
  setup();

  // expose public api
  return {
    setup
  };
}
