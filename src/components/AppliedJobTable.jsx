import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';

const progressSteps = ["Shortlisted", "Assessment", "Interview", "Hired"];

const ProgressBar = ({ currentStep }) => (
    <div className="flex items-center space-x-2">
        {progressSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-1">
                <div
                    className={`h-4 w-4 rounded-full ${
                        index <= currentStep ? "bg-green-500" : "bg-gray-300"
                    }`}
                ></div>
                <span className="text-sm">{step}</span>
                {index < progressSteps.length - 1 && (
                    <div
                        className={`h-1 w-8 ${
                            index < currentStep ? "bg-green-500" : "bg-gray-300"
                        }`}
                    ></div>
                )}
            </div>
        ))}
    </div>
);

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector((store) => store.job);


    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Feedback</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allAppliedJobs.length <= 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center">
                                You haven't applied for any jobs yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{appliedJob.job?.title}</TableCell>
                                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                <TableCell>
                                    <Badge
                                        className={`${
                                            appliedJob?.status === "rejected"
                                                ? "bg-red-400"
                                                : appliedJob.status === "pending"
                                                ? "bg-gray-400"
                                                : "bg-green-400"
                                        }`}
                                    >
                                        {appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <ProgressBar
                                        currentStep={progressSteps.indexOf(
                                            appliedJob?.progress || "Shortlisted"
                                            
                                        )}
                                    />
                                </TableCell>
                                <TableCell>
                                    {appliedJob.feedback ? (
                                        <span className="text-gray-800">{appliedJob.feedback}</span>
                                    ) : (
                                        <span className="text-gray-500 italic">No feedback provided</span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;
