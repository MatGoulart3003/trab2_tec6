CREATE TABLE IF NOT EXISTS MATCH(
  ID SERIAL PRIMARY KEY,
  nation_a VARCHAR(20) NOT NULL,
  score_nation_a INTEGER NOT NULL,
  nation_b VARCHAR(20) NOT NULL,
  score_nation_b INTEGER NOT NULL,
  match_date DATE NOT NULL
);

INSERT INTO match (id, nation_a, score_nation_a, nation_b, score_nation_b, match_date) values (1, 'Brasil', 0, 'Sérvia', 0, '2022-11-24');
INSERT INTO match (id, nation_a, score_nation_a, nation_b, score_nation_b, match_date) values (2, 'Brasil', 0, 'Suíça', 0, '2022-11-28');
INSERT INTO match (id, nation_a, score_nation_a, nation_b, score_nation_b, match_date) values (3, 'Brasil', 0, 'Camarões', 0, '2022-12-02');
INSERT INTO match (id, nation_a, score_nation_a, nation_b, score_nation_b, match_date) values (4, 'Sérvia', 0, 'Camarões', 0, '2022-11-28');
INSERT INTO match (id, nation_a, score_nation_a, nation_b, score_nation_b, match_date) values (5, 'Sérvia', 0, 'Suíça', 0, '2022-12-02');
INSERT INTO match (id, nation_a, score_nation_a, nation_b, score_nation_b, match_date) values (6, 'Suíça', 0, 'Camarões', 0, '2022-11-24');
