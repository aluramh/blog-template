---
templateKey: blog-post
title: This is my latest blogpost
date: 2020-08-15T20:45:06.292Z
description: Why does it not appear?
featuredpost: false
featuredimage: /img/blob.svg
tags:
  - no
---

gfytgyihjlnkml

![This is me](/img/t0d7y8mj9-u1nsla821-6c30f626b5ee-512.png "This is ME!")

Can you see me?

<div>
  <img id="yo" style="cursor: pointer;" width="100%"/>
</div>

<script>
  const image = document.getElementById("yo");

  image.src = "/img/t0d7y8mj9-u1nsla821-6c30f626b5ee-512.png";
  
  image.addEventListener('click', (event) => {
    console.log("Don't touch my face");
  });

  console.log({ image });
</script>