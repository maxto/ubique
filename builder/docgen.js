var fs = require('fs');
var mkdirp = require('mkdirp');
var ubique = require('../index.js');

// Generate document object based on js filename and folder
function gendoc(filename,folder) {
  // load js method
  var path = './../lib/';
  var code  = fs.readFileSync(path + folder + '/' + filename,'utf8');

  // function arguments
  var funstr = /\$u[.][^{]+/.exec(code)[0].trim();
    var funargs = funstr.split('function')[1];

  // comments
  var re = /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g;
  var arr = re.exec(code);
  var out = [];
  while (arr !== null) {
    out.push(arr);
    arr = re.exec(code);
    re.lastIndex;
  }
   // category
   var category = out[0][0].replace('/**', '')
   .replace('*/', '')
   .replace(/\n\s*\* ?/g, '\n')
   .replace(/\r/g, '');

   var txtline = category.split('\n');
   var catname = txtline[1];

   var comment = out[1][0].replace('/**', '')
   .replace('*/', '')
   .replace(/\n\s*\* ?/g, '\n')
   .replace(/\r/g, '');

   var lines = comment.split('\n');
   
   doc = {
    'funargs': funargs,
    'syntax': '',
    'category': catname,
    'name': '',
    'summary': '',
    'description': '',
    'param': [],
    'returns': [],
    'example': {},
    'folder': folder,
    'filename': filename
  }

  
  var count = 0,
  tagdesc = false,
  tagex = false;
  while (count < lines.length) {
    var line = lines[count];
    if (line === '') {
      line = line.replace('','\n');
    }
    if (line !== '') {
      // method
      if (/^@method/.test(line)) {
        var match = line.replace('@method','');
        doc.name = match.trim();
      }
      // summary
      if (/^@summary/.test(line)) {
        var match = line.replace('@summary','');
        doc.summary = match.trim();
      }
      // description
      if (/^@description/.test(line)) {
        var match = line.replace('@description','');
        doc.description = match.trim();
        tagdesc = true;
      } else
      if (tagdesc === true) {
        if (!/^@/.test(line)) {
          doc.description += '  \n' + line.trim();
        }
      }
      // parameters
      if (/^@param/.test(line)) {
        tagdesc = false;
        var match = line.replace('@param','')
        .replace('{','')
        .replace('}','')
        .replace(/\|/g,'/')
        .trim()
        .replace(' ','\n')
        .replace(' ','\n')
        .split('\n');
        doc.param.push(match);
      }
      // returns
      if (/^@return/.test(line)) {
       var match = line.replace('@return','')
       .replace('{','`')
       .replace('}','`')
       .replace(/\|/g,'/')
       .trim()
       .replace(' ','\n')
       .replace(' ','\n')
       .split('\n');
       doc.returns.push(match);
     }
      // examples
      if (/^@example/.test(line)) {
        var i = 1, txt = [], vars = [],funs = [];
        while (lines[count + i] !== undefined) {
          var tmp = lines[count + i];
          if (/^var/.test(tmp)) {
           vars.push(tmp.trim());
         }
         if (/^ubique/.test(tmp)) {
           funs.push(tmp.trim());
         }
         txt.push(tmp.trim());
         i++;
       }
       doc.example = {'txt':txt, 'vars': vars, 'funs': funs}
     }

   }
   count++;
 }
 return doc;

}
// Generate markdown file
function genmd(doc) {
  text = '### ' + doc.name + '\n\n';
  text +=  doc.summary + '\n\n\n';
  text += '#### Syntax\n\n' + 'ubique.' + doc.name + doc.funargs + '\n\n\n';
  text += '#### Description\n\n' + doc.description + '\n\n\n';
  text += '#### Arguments\n\n';
  text += '|Params|Type|Description\n';
  text += '|---------|----|-----------\n' +
  doc.param.map(function(p) {
    return '|`' + p[1] + '` | ' 
    + p[0] + ' | ' 
    + p[2]
  }).join('\n') + '\n\n\n';
  text += '#### Examples\n\n';
  text += '```js\n' + doc.example.txt.join('\n') + '```' +  '\n\n';
  return text;
}

// generate unit test
function gentest(doc) {
  // some functions needs manual parsing for unit tests
  mtestf = ['randchar','rand','montecarlovar','linearreg','tomonthly',
  'erfinv','exp','clock','now','today','paramconvvar'];
 
  if (ubique.isempty(ubique.find(mtestf.map(function(el){return el === doc.name})))) {
    var outpath = './../test/' + doc.folder;
    var exfuns = doc.example.funs;
    var foldname = doc.folder;
    var setvars = doc.example.vars.map(function(a) {return a;}).join('\n');

    text = "var assert = require('assert');\n";
    text += "var ubique = require('../../index.js');\n\n";
    text += "suite('" + foldname + "',function () {\n";
      text += "console.log('Testing " + foldname + '/' + doc.name + " ...');\n";
      text += "test('" + doc.name + "', function (done) {\n\n";
        text += setvars + '\n\n';
        text += exfuns.map(function(el) {
          var test = JSON.stringify(eval(setvars + el)).replace(';','');
          return 'assert.deepEqual(' + el.replace(/;/g,'') + ',' + test + ');\n';
        }).join('');
        text += '\n\ndone();\n' + '});\n' + '});\n\n\n'
text += '// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->'
mkdirp(outpath, function(err) {
  if (err) console.log(err) 
});

// write test file
fs.writeFileSync(outpath + '/' + doc.filename,text,'utf8');
}
}

// Run document/unit test generator
function run () {
  // get category folders and functions
  var fcns = {};
  var mainpath = './../';
  var folders = fs.readdirSync(mainpath + 'lib','utf8');

  for (var i = 0;i < folders.length; i++) {

    if (folders[i].lastIndexOf('.js') === -1) {

      var files = fs.readdirSync(mainpath + 'lib/' + folders[i],'utf8');
      var outpath = mainpath + 'doc/' + folders[i];
      mkdirp(outpath, function(err) {
        if (err) console.log(err) 
      });

      for (var j = 0;j < files.length; j++) {
        // generate doc
        var fundoc = gendoc(files[j],folders[i]);

        // generaye markdown
        var funmd = genmd(fundoc);

        // generate test
        gentest(fundoc);
        name = fundoc.name;
        fcns[name] = {
          name: name,
          category: fundoc.category,
          link: '/' + folders[i] + '/' + name + '.md',
          summary: fundoc.summary,
          md: funmd
        }
        try {
          fs.writeFileSync(outpath + '/' + name + '.md',funmd);
        } catch (err) {
          console.log(err)
        }
      }
    }
  }

  // set categories
  var catgs = {};
  for (var k in fcns) {
    var fn = fcns[k];
    var categ = catgs[fn.category];
    if (!categ) {
      catgs[fn.category] = {};
    }
    catgs[fn.category][k] = fcns[k];
  }
  
  // create CONTENTS.md for Markdown docs
  function categmd(catgs) {
    var categorical = "## Contents\n\n";
    categorical += Object.keys(catgs).sort().map(function(a) {
      var fn = catgs[a];
      return '### ' + a + '\n\n' +
      Object.keys(fn).sort().map(function(b) {
        return '- [' + fn[b].name + '](/doc' + fn[b].link + ')' + ' - ' + fn[b].summary;
      }).join('\n') + '\n';
    }).join('\n');
    fs.writeFileSync(mainpath + 'doc/contents.md',categorical);
  }
  
  // create CONTENTS.md for HTML docs
  // ex. - [isarray](/doc/apiref.html#-test-isarray)
  function categhtml(catgs) {
    var categorical = "# Contents\n\n";
    categorical += Object.keys(catgs).sort().map(function(a) {
      var fn = catgs[a];
      return '## ' + a + '\n\n' +
      Object.keys(fn).sort().map(function(b) {
        var labcat = fn[b].category.toLowerCase().replace(/ /g,'-');
        return '- [' + fn[b].name + '](/doc/apidoc.html#-' + labcat + '-' + fn[b].name + ')' + ' - ' + fn[b].summary;
      }).join('\n') + '\n';
    }).join('\n');
    fs.writeFileSync('../../maxto.github.io/doc/contentshtml.md',categorical);
  }
  
  // create APIDOC.md
  function apidoc(catgs) {
   var categorical = '';
   categorical += Object.keys(catgs).sort().map(function(a) {
    var fn = catgs[a];
    return '## ' + a + '\n\n' +
    Object.keys(fn).sort().map(function(b) {
      return fn[b].md;
    }).join('\n') + '\n';
  }).join('\n');
   fs.writeFileSync('../../maxto.github.io/doc/apidochtml.md',categorical);
 }


  // build
 categmd(catgs);
 categhtml(catgs);
 apidoc(catgs);

}

// run all
exports.run = run;
