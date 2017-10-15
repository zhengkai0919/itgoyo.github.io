menuToggle.addEventListener(even, function (e) {
451
    Blog.toggleMenu(true);
452
    e.preventDefault();
453
}, false);
454
455
menuOff.addEventListener(even, function () {
456
    menu.classList.add('hide');
457
}, false);
458
459
mask.addEventListener(even, function (e) {
460
    Blog.toggleMenu();
461
    Blog.hideOnMask.forEach(function (hide) {
462
        hide()
463
    });
464
    e.preventDefault();
465
}, false);
466
467
d.addEventListener('scroll', function () {
468
    var top = docEl.scrollTop;
469
    Blog.toggleGotop(top);
470
    Blog.fixedHeader(top);
471
    Blog.toc.fixed(top);
472
    Blog.toc.actived(top);
473
}, false);
474
475
if (w.BLOG.SHARE) {
476
    Blog.share()
477
}
478
479
if (w.BLOG.REWARD) {
480
    Blog.reward()
481
}
482
483
Blog.noop = noop;
484
Blog.even = even;
485
Blog.$ = $;
486
Blog.$$ = $$;
487
488
Object.keys(Blog).reduce(function (g, e) {
489
    g[e] = Blog[e];
490
    return g
491
}, w.BLOG);
492
493
if (w.Waves) {
494
    Waves.init();
495
    Waves.attach('.global-share li', ['waves-block']);
496
    Waves.attach('.article-tag-list-link, #page-nav a, #page-nav span', ['waves-button']);
497
} else {
498
    console.error('Waves loading failed.')
499
}
500
})(window, document);
501
5 file changes in working directory
View changes
commit:e7ae23
optimize reward, #250
