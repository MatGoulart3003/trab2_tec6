CREATE TABLE IF NOT EXISTS MATCH(
  ID SERIAL PRIMARY KEY,
  nationA VARCHAR(20) NOT NULL,
  scoreNationA INTEGER NOT NULL,
  nationB VARCHAR(20) NOT NULL,
  scoreNationB INTEGER NOT NULL,
  matchDate DATE NOT NULL
);

INSERT INTO match (id, nationA, scoreNationA, nationB, scoreNationB, matchDate) values (1, 'Brasil', 0, 'Sérvia', 0, '2022-11-24');
INSERT INTO match (id, nationA, scoreNationA, nationB, scoreNationB, matchDate) values (2, 'Brasil', 0, 'Suíça', 0, '2022-11-28');
INSERT INTO match (id, nationA, scoreNationA, nationB, scoreNationB, matchDate) values (3, 'Brasil', 0, 'Camarões', 0, '2022-12-02');
INSERT INTO match (id, nationA, scoreNationA, nationB, scoreNationB, matchDate) values (4, 'Sérvia', 0, 'Camarões', 0, '2022-11-28');
INSERT INTO match (id, nationA, scoreNationA, nationB, scoreNationB, matchDate) values (5, 'Sérvia', 0, 'Suíça', 0, '2022-12-02');
INSERT INTO match (id, nationA, scoreNationA, nationB, scoreNationB, matchDate) values (6, 'Suíça', 0, 'Camarões', 0, '2022-11-24');
