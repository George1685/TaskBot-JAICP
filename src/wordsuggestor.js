const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
fun suggestWords(filename){
    var filedata;
    fetch(filename)
        .then(response => response.text())
        .then(text => filedata)
    
}