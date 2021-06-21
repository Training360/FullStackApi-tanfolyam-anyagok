const yargs = require('yargs');
const { id, producer, title } = require('./options');
const MovieApi = require('./movie.api');
const MovieService = require('./movie.service');

const moviesApi = MovieApi('./database/movies.json', 'movies');
( async () => {

    const {
        getAllMovies,
        findMovieById,
        createMovie,
        editMovie,
        removeMovie
    } = await MovieService(moviesApi);
    
    yargs
        .version('1.0.0')
        .usage('Usage: <command> [options]')
        .command({
            command: 'get',
            describe: 'Get all movies',
            handler: () => console.log(getAllMovies())
        })
        .command({
            command: 'find',
            describe: 'Find a movie by id',
            builder: { id },
            handler: (args) =>
                console.log(findMovieById(args.id))
        })
        .command({
            command: 'create',
            describe: 'Create a new movie',
            builder: { producer, title },
            handler: async (args) => {
                console.log( await createMovie(args) )
            }
        })
        .command({
            command: 'edit',
            describe: 'Edit a movie',
            builder: { id, producer, title },
            handler: async (args) => {
                console.log( await editMovie(args))
            }
        })
        .command({
            command: 'remove',
            describe: 'Remove a movie by ID',
            builder: { id },
            handler: async (args) => {
                await removeMovie(args.id)
                console.log('deleted')
            }
        })
        .locale('en')
        .strict()
        .help()
        .parse();
})();
