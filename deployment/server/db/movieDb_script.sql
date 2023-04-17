/******************************************************
* Movie Database Script
* Version: 2.0
* Description: This script creates the database and tables
*              for a movie database application.
* Author: Quinn McClure & John Fox
* Date: 4/04/2023
******************************************************/

DROP TABLE IF EXISTS [Movie];
DROP TABLE IF EXISTS [Director];
DROP TABLE IF EXISTS [Award];
DROP TABLE IF EXISTS [ProductionStudio];
DROP TABLE IF EXISTS [Genre];
DROP TABLE IF EXISTS [Actor];
DROP TABLE IF EXISTS [NominatedFor];
DROP TABLE IF EXISTS [Wins];
DROP TABLE IF EXISTS [Produces];
DROP TABLE IF EXISTS [ActsIn];
DROP TABLE IF EXISTS [Describes];
DROP TABLE IF EXISTS [DirectedBy];

--Tables --> add in foreign keys to regular tables
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
    Age INTEGER NOT NULL, --how to calc  💭
    DOB DATE NOT NULL,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL
);

--Relationships --> correct??????
CREATE TABLE NominatedFor (
    MovieId INTEGER NOT NULL, 
    AwardId INTEGER NOT NULL,
    CONSTRAINT fk_award_nominatedfor FOREIGN KEY (AwardId) REFERENCES Award(AwardId),
    CONSTRAINT fk_movie_nominatedfor FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
);

CREATE TABLE Wins (
    MovieId INTEGER NOT NULL, 
    AwardId INTEGER NOT NULL,
    YearGiven YEAR NOT NULL,
    CONSTRAINT fk_award_wins FOREIGN KEY (AwardId) REFERENCES Award(AwardId),
    CONSTRAINT fk_movie_wins FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
);

CREATE TABLE Produces (
    MovieId INTEGER NOT NULL, 
    StudioId INTEGER NOT NULL,
    CONSTRAINT fk_productionstudio_produces FOREIGN KEY (StudioId) REFERENCES ProductionStudio(StudioId),
    CONSTRAINT fk_movie_produces FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
);

CREATE TABLE ActsIn (
    MovieId INTEGER NOT NULL, 
    ActorId INTEGER NOT NULL, 
    CONSTRAINT fk_actor_actsin FOREIGN KEY (ActorId) REFERENCES Actor(ActorId),
    CONSTRAINT fk_movie_actsin FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
);

CREATE TABLE Describes (
    MovieId INTEGER NOT NULL, 
    GenreId INTEGER NOT NULL,
    CONSTRAINT fk_genre_describes FOREIGN KEY (GenreId) REFERENCES Genre(GenreId),
    CONSTRAINT fk_movie_describes FOREIGN KEY (MovieId) REFERENCES Movie(MovieId)
); 

CREATE TABLE DirectedBy (
    MovieId INTEGER NOT NULL, 
    DirId INTEGER NOT NULL,
    CONSTRAINT fk_movie_directedby FOREIGN KEY (MovieId) REFERENCES Movie(MovieId),
    CONSTRAINT fk_director_directedby FOREIGN KEY (DirId) REFERENCES Director(DirId)
);

--Entries--: Regular Tables

--Movies
INSERT INTO Movie (TicketsSold, Rating, Language, ReleaseDate, Title, Summary, Seconds, Budget) VALUES (135728167, 'R', 'English', 2022/04/08, 
'Everything Everywhere All At Once', 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
8340, 14300000);

INSERT INTO Movie (TicketsSold, Rating, Language, ReleaseDate, Title, Summary, Seconds, Budget) VALUES (22957625, 'R', 'English', 2021/10/29, 
'Last Night in Soho', 'A young fashion student who becomes mysteriously transported to the 1960s and befriends her idol, but soon discovers the dark and dangerous secrets of the past.',
6960, 43000000);

INSERT INTO Movie (TicketsSold, Rating, Language, ReleaseDate, Title, Summary, Seconds, Budget) VALUES (32052925, 'R', 'English', 1960/09/08, 
'Psycho', 'A Phoenix secretary embezzles $40,000 from her employers client, goes on the run and checks into a remote motel run by a young man under the domination of his mother',
69540, 806947);



--Director
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Nolan', 'Christopher', 1970/07/30);
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Fincher', 'David', 1962/08/28);
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Gerwig', 'Greta', 1983/08/04);
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Peele', 'Jordan', 1979/02/21);
INSERT INTO Director (DirLastName, DirFirstName, DOB) VALUES ('Hitchcock', 'Alfred', 1899/08/13);

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
INSERT INTO Genre (GenreName) VALUES ('Sci-Fi');


--Actor
INSERT INTO Actor (Nationality, Age, DOB, FirstName, LastName) VALUES ('British', '49', 1974/01/30, 'Christian', 'Bale');

    --EEAO Actors
INSERT INTO Actor (Nationality, Age, DOB, FirstName, LastName) VALUES ('Vietnamese', '51', 1971/08/20, 'Ke Huy', 'Quan');
INSERT INTO Actor (Nationality, Age, DOB, FirstName, LastName) VALUES ('American', '64', 1958/11/22, 'Jamie', 'Lee Curtis');
INSERT INTO Actor (Nationality, Age, DOB, FirstName, LastName) VALUES ('Malasian', '60', 1962/08/06, 'Michelle', 'Yeoh');


INSERT INTO Actor (Nationality, Age, DOB, FirstName, LastName) VALUES ('American', '26', 1996/04/16, 'Anya', 'Taylor-Joy');
INSERT INTO Actor (Nationality, Age, DOB, FirstName, LastName) VALUES ('Australian', '22', 2000/07/26, 'Thomasin', 'McKenzie');


--Entries--: Relationship Tables

--NominatedFor
INSERT INTO NominatedFor (MovieId, AwardId) VALUES (1, 1);

--Wins
INSERT INTO Wins (MovieId, AwardId, YearGiven) VALUES (1, 1, 2022);

--Produces
INSERT INTO Produces (MovieId, StudioId) VALUES (1, 1);

--ActsIn
INSERT INTO ActsIn (MovieId, ActorId) VALUES (1, 2);
INSERT INTO ActsIn (MovieId, ActorId) VALUES (1, 3);
INSERT INTO ActsIn (MovieId, ActorId) VALUES (1, 4);

--Describes
INSERT INTO Describes (MovieId, GenreId) VALUES (1, 7);
INSERT INTO Describes (MovieId, GenreId) VALUES (2, 1);
INSERT INTO Describes (MovieId, GenreId) VALUES (3, 1);

--DirectedBy
INSERT INTO DirectedBy (MovieId, DirId) VALUES (3, 5);


