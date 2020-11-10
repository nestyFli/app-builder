module.exports = function(helper) {
    return require(`../../images/${helper.hash.path}`).default;
}