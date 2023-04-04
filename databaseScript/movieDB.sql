CREATE DATABASE movieDatabase;

--Tables
CREATE TABLE Movie (
    MovieId INTEGER PRIMARY KEY AUTOINCREMENT,
    TicketsSold INTEGER NOT NULL,
    Rating NVARCHAR(5) NOT NULL,
    Language NVARCHAR(10) NOT NULL,
    ReleaseDate DATE NOT NULL,
    Title TEXT NOT NULL,
    Summary Description NVARCHAR(255) NOT NULL,
    Seconds INTEGER NOT NULL,
    Budget INTEGER NOT NULL
);

CREATE TABLE Director (
    DirId INTEGER PRIMARY KEY AUTOINCREMENT,
    DirLastName TEXT NOT NULL,
    DirFirstName TEXT NOT NULL,
    DOB DATE NOT NULL
);

CREATE TABLE Award (
    AwardId INTEGER PRIMARY KEY AUTOINCREMENT,
    AwardTitle TEXT NOT NULL,
    AwardType TEXT NOT NULL
);

CREATE TABLE ProductionStudio (
    StudioId INTEGER PRIMARY KEY AUTOINCREMENT,
    StudioName TEXT NOT NULL
);

CREATE TABLE Genre (
    GenreId INTEGER PRIMARY KEY AUTOINCREMENT,
    GenreName TEXT NOT NULL
);

CREATE TABLE Actor (
    ActorId INTEGER PRIMARY KEY AUTOINCREMENT,
    Nationality TEXT NOT NULL,
    Age, --how
    DOB DATE NOT NULL,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL
);

--Relationships
CREATE TABLE NominatedFor (
    CONSTRAINT fk_award_nominatedfor FOREIGN KEY (AwardId) REFERENCES Award(AwardId),
    CONSTRAINT fk_movie_nominatedfor FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
);

CREATE TABLE Wins (
    CONSTRAINT fk_award_wins FOREIGN KEY (AwardId) REFERENCES Award(AwardId),
    CONSTRAINT fk_movie_wins FOREIGN KEY (MovieId) REFERENCES Movie(MovieId),
    YearGiven YEAR NOT NULL
);

CREATE TABLE Produces (
    CONSTRAINT fk_productionstudio_produces FOREIGN KEY (StudioId) REFERENCES ProductionStudio(StudioId),
    CONSTRAINT fk_movie_produces FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
);

CREATE TABLE ActsIn (
    CONSTRAINT fk_actor_actsin FOREIGN KEY (ActorId) REFERENCES Actor(ActorId),
    CONSTRAINT fk_movie_actsin FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
);

CREATE TABLE Describes (
    CONSTRAINT fk_genre_describes FOREIGN KEY (GenreId) REFERENCES Genre(GenreId),
    CONSTRAINT fk_movie_describes FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
); 

CREATE TABLE DirectedBy (
    CONSTRAINT fk_movie_directedby FOREIGN KEY (MovieId) REFERENCES Movie(MovieId),
    CONSTRAINT fk_director_directedby FOREIGN KEY (DirId) REFERENCES Director(DirId),
);

--Entries--: Regular Tables

--Movies
INSERT INTO Movie (TicketsSold, Rating, Language, ReleaseDate, Title, Summary, Seconds, Budget) VALUES

--Director
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Nolan', 'Christopher', 1970/07/30);
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Fincher', 'David', 1962/08/28);
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Gerwig', 'Greta', 1983/08/04);
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Peele', 'Jordan', 1979/02/21);

--Award
INSERT INTO Award (AwardTitle, AwardType) VALUES ('Best Picture', 'Academy Award');
INSERT INTO Award (AwardTitle, AwardType) VALUES ('Best Film', 'British Academy Film Awards');
INSERT INTO Award (AwardTitle, AwardType) VALUES ('Golden Lion', 'Venice Film Festival');
INSERT INTO Award (AwardTitle, AwardType) VALUES ('Palme dOr', 'Cannes Film Festival');

--Production Studios
INSERT INTO ProductionStudio (StudioName) VALUES ('A24');
INSERT INTO ProductionStudio (StudioName) VALUES ('Monkeypaw Productions');
INSERT INTO ProductionStudio (StudioName) VALUES ('Marvel Studios');
INSERT INTO ProductionStudio (StudioName) VALUES ('Universal Pictures');
INSERT INTO ProductionStudio (StudioName) VALUES ('Warner Bros.');

--Genre
INSERT INTO Genre (GenreName) VALUES ('Horror');
INSERT INTO Genre (GenreName) VALUES ('Action');
INSERT INTO Genre (GenreName) VALUES ('Romance');
INSERT INTO Genre (GenreName) VALUES ('Comedy');
INSERT INTO Genre (GenreName) VALUES ('Drama');
INSERT INTO Genre (GenreName) VALUES ('Fantasy');


--Actor
INSERT INTO Actor (Nationality, Age, DOB, FirstName, LastName) VALUES


--Entries--: Relationship Tables


