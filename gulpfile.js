var gulp = require('gulp');
var util = require('gulp-util');
var shell = require('gulp-shell');
var del = require('del');
var jsonEditor = require('gulp-json-editor');

var package = require('./package.json');

// 清理发布目录
gulp.task('clean', () => {
  return del(['publish'])
})

// 清楚package.json中不需要的属性
gulp.task('editPackage', ['clean'], () => {
  return gulp.src('package.json')
    .pipe(jsonEditor({
      'scripts': '',
      'dependencies': '',
      'devDependencies': '',
      'npmPublish': ''
    }))
    .pipe(gulp.dest('publish'))
})

// 复制打包目录
gulp.task('copy', ['editPackage'], () => {
  return gulp.src('dist/**')
    .pipe(gulp.dest('publish/dist'))
})

// 设置npm用户
gulp.task('npmSetConfig', ['copy'], shell.task([
  'npm set //' + package.npmPublish.ip + '/:username=' + package.npmPublish.username,
  'npm set //' + package.npmPublish.ip + '/:_password=' + package.npmPublish.password,
  'npm set //' + package.npmPublish.ip + '/:email=' + package.npmPublish.email,
  'npm set //' + package.npmPublish.ip + '/:always-auth=false',
]));

gulp.task('npmPublish', ['npmSetConfig'], shell.task([
  'cd publish && npm publish'
]));
