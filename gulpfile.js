//@ts-check

import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';


const files = await imagemin(['images/*.png'], {
    destination: 'images/mini',
    plugins: [
        imageminJpegtran(),
        imageminPngquant({
            quality: [0.002, 0.005]
        })
    ]
});

console.log(`Zipped to ${files[0].data.length} bytes`);



// import gulp from 'gulp';
// import imagemin from 'gulp-imagemin';

// export default () => (
//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// );