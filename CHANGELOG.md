# ChangeLog

### 0.1.1 - 20150227

- Fixed `size`,`squeeze`,`subset` (now can manage an whole col/row with ':' symbol),
`subsetlin`
- New time series functions: `datenum`,`datestr`,`month`,`weekday`,'toweekly',`tomonthly`
- Added `unique`,`find`
- Added dependecy `moment.js` for datetime manipulation

### 0.1.0 - 20150223

- Updated site http://maxto.github.io/ with custom template and logo

### 0.0.9 - 20150220

- Built Documentation: API Docs and For MATLAB Users

### 0.0.8 - 20150201

- Modified some _test_ functions
- Added in _quants_ `cdrawdown`, deleted `maxdrawdown`,`riskretratio`
- Modified `avgdrawdown`,`drawdown`,`montecarlovar`,`omegaratio`,`sharpe`,
`sortino`,`trackerr`,`treynor`,`ulcerindex`,`xreturn`
- Added folder _util_ with `format`
- Added in _matarrs_ `array` 
- Modified `matrix` and `drawdown`
- Changed README 
- Added in _quants_ `histvar`,`histcondvar`,`sharpe`,`adjsharpe`,`annavgrisk`,`downsiderisk`,
  `paramvar`,`paramcondvar`,`downsidepot`,`upsidepot`,`modigliani`,`inforatio`,`jensenalpha`
- Modified `isvector`,`linearreg` 

### 0.0.7 - 20150119

- Update README file with comparative MATLAB® vs ubique
- Modified `end`, `mldivide`, `mrdivide`, `flipud`, `fliprl`
- Renamed `flip` in `flipdim`
- Added functions in _quants_ `annavgreturn`,`annreturn`,`cagr`,`irr`,`mdietz`,`percpos`,`ror`,`twr`,`xreturn`

### 0.0.6 - 20150115

- Added Install methods: Git, Npm, Bower.
- Added minified version in _dist_ folder
- Added `gulpfile.js` for bundle, minify `npm run build` and watch  `npm run watch`

### 0.0.5 - 20150114

- Added _contdistrib_ with `normpdf`,`normcdf`,`normiv`
- Rebuilt main structure with auto-compile for ubique constructor
- Added webpack for browser bundle in _dist_ folder

### 0.0.4 - 20150104

- Added _findat_ folder with `tick2ret`,`ret2tick` (renamed later in _quants_)
- Added in _statrnd_ `jbtest`,`pdist`
- Added in _test\util_ `arrayTestUtils`
- Added some test functions
- Bugfix 

### 0.0.3 - 20150103

- Added _test_ folder
- Added _interpol_ folder with `interp1` function
- Added _regressmod_ folder with `linearreg` function
- Added in _statrnd_ `hurst`,`iqr`,`kurtosis`,`moment`,`prctile`,`quantile`,`quartile`,`skewness`,`xkurtosis`

### 0.0.2 - 20141231

- Added LICENSE,HISTORY
- Added in _datatypes_ `islogical`
- Added in _elmath_ `exp`,`log`,`sqrt`
- Added in _statrnd_ `histc`,`mad`,`range`,`std`,`variance`,`zscore`
- Bugfix

### 0.0.1 - 20141224

First commit with more than 100 functions in the following categories:

- Arithmetic Operations
- Array Creation and Concatenation
- Array Dimensions
- Create and Concatenate Strings
- Complex Numbers
- Data Type Identification
- Descriptive Statistic
- Indexing
- Linear Equations
- Matrix Analysis
- Matrix Types
- Numeric Types
- Sorting and Reshaping Arrays
- Special Functions
- Structures
