const o={birthday: '1995 02 14',get age(){return new Date().getFullYear() - new Date(this.birthday).getFullYear()}};

const bio = ({birthday,age}) =>`My birthday is ${birthday} and my age is ${age}`;
