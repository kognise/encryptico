import Component from '@ember/component';

export default Component.extend({
  actions: {
    buttonClicked(name) {
      if (name == "testButton") {
        alert("Thanks!");
      }
    }
  }
});
