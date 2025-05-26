const nameSchema = require('./model')


let express = require('express');
const mongoose = require('mongoose');
const read =async(req,res)=>{
     const data = await nameSchema.find();
    res.send(data)
}

const deleted=async(req,res)=>{
    await nameSchema.deleteMany({name:req.params.name})
}

const update=async(req,res)=>{
        const {work} = req.body;
        await nameSchema.updateOne({name:req.params.name},{$set:{work:work}})
}

const create=async(req,res)=>{
       const {name,work} = req.body;
           nameob = {name,work};
       
           const newData = new nameSchema({
               name,work
           })
           await newData.save()
}

exports.create = create;
exports.update = update;
exports.deleted = deleted;
exports.read = read;


