const yargs = require('yargs');
const { id, producer, title } = require('./options');
const MovieService = require('./class/movie.service');
const movieService = new MovieService();

yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')
    .command({
        command: 'getall',
        describe: 'Get all movies',
        handler: async () => {
            console.log( await movieService.getAllMovies() );
        }
    })
    .command({
        command: 'find',
        describe: 'Get one movie',
        builder: { id },
        handler: async (args) => {
            console.log( await movieService.getMovie(args.id) );
        }
    })
    .locale('en')
    .strict()
    .help()
    .parse();