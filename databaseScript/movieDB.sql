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
    AwardType TEXT NOT NULL,
    YearGiven YEAR NOT NULL
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
    AwardId
    MovieId
);

CREATE TABLE Wins (
    AwardId
    MovieId
);

CREATE TABLE Produces (
    StudioId
    MovieId
);

CREATE TABLE ActsIn (
    ActorId
    MovieId
);

CREATE TABLE Describes (
    GenreId
    MovieId
); 

CREATE TABLE DirectedBy (
    MovieId
    DirId
);
