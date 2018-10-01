import React from 'react';

import Contact from './contact';

export default class AddressBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          name: 'Alice Aardvark',
          photo: 'https://api.adorable.io/avatars/64/alice%40thinkful.com',
          address: '1600 Pennsylvania Ave'
        },
        {
          name: 'Bob Bear',
          photo: 'https://api.adorable.io/avatars/64/bob%40thinkful.com',
          address: '725 5th Ave'
        },
        {
          name: 'Carol Coyote',
          photo: 'https://api.adorable.io/avatars/64/carol%40thinkful.com',
          address: '4 Pennsylvania Plaza'
        }
      ]
    };
  }

  render() {
    const contactsHtml = this.state.contacts.map((contact, index) => (
      <div key={index}>
        <Contact {...contact} />
      </div>
    ));
    return <ul>{contactsHtml}</ul>;
  }
}
