---
title: "COVID-Align: Accurate online alignment of hCoV-19 genomes using a profile HMM"
date: 2020-10-12
url: https://doi.org/10.1093/bioinformatics/btaa871
authors: 
    - Frédéric Lemoine
    - Luc Blassel
    - Jakub Voznica
    - Olivier Gascuel
---

## Abstract
### Motivation
The first cases of the COVID-19 pandemic emerged in December 2019. Until the end of February 2020, the number of available genomes was below 1,000, and their multiple alignment was easily achieved using standard approaches. Subsequently, the availability of genomes has grown dramatically. Moreover, some genomes are of low quality with sequencing/assembly errors, making accurate re-alignment of all genomes nearly impossible on a daily basis. A more efficient, yet accurate approach was clearly required to pursue all subsequent bioinformatics analyses of this crucial data.
### Results
hCoV-19 genomes are highly conserved, with very few indels and no recombination. This makes the profile HMM approach particularly well suited to align new genomes, add them to an existing alignment and filter problematic ones. Using a core of ∼2,500 high quality genomes, we estimated a profile using HMMER, and implemented this profile in COVID-Align, a user-friendly interface to be used online or as standalone via Docker. The alignment of 1,000 genomes requires ∼50mn on our cluster. Moreover, COVID-Align provides summary statistics, which can be used to determine the sequencing quality and evolutionary novelty of input genomes (e.g. number of new mutations and indels).
### Availability
[https://covalign.pasteur.cloud](https://covalign.pasteur.cloud), [hub.docker.com/r/evolbioinfo/covid-align](hub.docker.com/r/evolbioinfo/covid-align)