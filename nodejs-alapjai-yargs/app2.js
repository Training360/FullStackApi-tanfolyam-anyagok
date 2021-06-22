const yargs = require('yargs');
const { id, producer, title } = require('./options');
const MovieService = require('./class/movie.service');
const movieService = new MovieService();

yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')
    .command({
        command: 'get',
        describe: 'Get all movies',
        handler: async () => {
            console.log( await movieService.getAllMovies() );
        }
    })
    .locale('en')
    .strict()
    .help()
    .parse();