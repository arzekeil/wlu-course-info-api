# Wilfrid Laurier Unviersity's Unofficial Course Information API

## Problem

Wilfrid Laurier University does not have a public api that developers could use to access information on course's available at the university.  

## Purpose

The purpose of this API is to provide a way for developers to work with course information on Wilfrid Laurier University.  

## How I solved the Problem

I firstly have a bot scrape the [Academic Calendar](https://academic-calendar.wlu.ca/) for Wilfrid Laurier University and store the information into a csv file.  

I then run a python script that uses regex to parse through the csv file to format the pre-requisites for every course.  

After running the script I upload the data onto a mongodb database where it can be used by the microservice.  

## Use Cases

### Data Validation

[Simply-Degree](https://simplydegree.web.app/login)  
[SimplyDegree Repo](https://github.com/saifaldin14/SimplyDegree)  
Simply Degree is a complete visual degree management system for students to plan their courses, establish clear study routines and effectively take control of their semesters.  
It uses a modified version of the Wilfrid Laurier University Course Information API to validate that courses exist.  

## Future Improvements

1. Automate the process of running the web scraping bot that scrapes the Academic Calendar for course information.  

2. Automate the process of running the python script everytime new data is pulled from web scraping the Academic Calendar.  

3. Automate the process of uploading the formatted data onto MongoDB.  

## Technologies Used

ETL: Beautiful Soup, Python.  
Rest API: Node.js, Express.js.  
Database: MongoDB.  
