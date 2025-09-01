import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.Bucket("primeiro-bucket", {
  bucket: "primeiro-bucket-rocketseat-iac-1234567890",
  tags: {
    IAC: "true",
  },
});

const secondBucket = new aws.s3.Bucket("segundo-bucket", {
  bucket: "segundo-bucket-rocketseat-iac-1234567890",
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  name: "primeiro-ecr",
  tags: {
    IAC: "true",
  },
  imageTagMutability: "IMMUTABLE",
});

// Export the name of the bucket
export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
