CREATE DATABASE movieDatabase;

--Tables
CREATE TABLE Movie (
    MovieId
    TicketsSold
    Rating
    Language
    ReleaseDate
    Title
    Summary
    Seconds
    Budget
);

CREATE TABLE Director (
    DirId
    DirLastName
    DirFirstName
    DOB
);

CREATE TABLE Award (
    AwardId
    AwardTitle
    AwardType
    YearGiven
);

CREATE TABLE ProductionStudio (
    StudioId
    StudioName
);

CREATE TABLE Genre (
    GenreId
    GenreName
);

CREATE TABLE Actor (
    ActorId
    Nationality
    Age
    DOB
    FirstName
    LastName
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
