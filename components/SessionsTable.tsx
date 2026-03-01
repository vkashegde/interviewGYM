"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/EmptyState";
import { Calendar } from "lucide-react";

export interface Session {
  id: string;
  title: string;
  date: string;
  duration: string;
  status: "Completed" | "Scheduled" | "In Progress";
  action: {
    type: "link" | "button";
    label: string;
    href?: string;
  };
}

interface SessionsTableProps {
  sessions?: Session[];
  onNewSession?: () => void;
}

const defaultSessions: Session[] = [
  {
    id: "1",
    title: "Backend Engineer Mock",
    date: "Oct 24, 2023",
    duration: "45 min",
    status: "Completed",
    action: {
      type: "link",
      label: "View Report",
      href: "#",
    },
  },
  {
    id: "2",
    title: "System Design Prep",
    date: "Oct 26, 2023",
    duration: "60 min",
    status: "Completed",
    action: {
      type: "link",
      label: "View Report",
      href: "#",
    },
  },
  {
    id: "3",
    title: "Frontend Basics",
    date: "Nov 02, 2023",
    duration: "30 min",
    status: "Scheduled",
    action: {
      type: "link",
      label: "Edit",
      href: "#",
    },
  },
  {
    id: "4",
    title: "Data Structures Deep Dive",
    date: "Nov 05, 2023",
    duration: "45 min",
    status: "In Progress",
    action: {
      type: "button",
      label: "Join",
    },
  },
];

export function SessionsTable({ sessions = defaultSessions, onNewSession }: SessionsTableProps) {
  if (sessions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <EmptyState
          icon={Calendar}
          title="No sessions yet"
          description="Start your first mock interview session to track your progress and receive feedback."
          actionLabel="Create New Session"
          onAction={onNewSession}
          className="py-16"
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 hover:bg-gray-50">
            <TableHead className="font-semibold">SESSION TITLE</TableHead>
            <TableHead className="font-semibold">DATE</TableHead>
            <TableHead className="font-semibold">DURATION</TableHead>
            <TableHead className="font-semibold">STATUS</TableHead>
            <TableHead className="font-semibold">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session.id} className="hover:bg-gray-50">
              <TableCell className="font-medium text-gray-900">
                {session.title}
              </TableCell>
              <TableCell className="text-gray-600">{session.date}</TableCell>
              <TableCell className="text-gray-600">{session.duration}</TableCell>
              <TableCell>
                <StatusBadge status={session.status} />
              </TableCell>
              <TableCell>
                {session.action.type === "button" ? (
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white h-8 px-4"
                  >
                    {session.action.label}
                  </Button>
                ) : (
                  <a
                    href={session.action.href}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer"
                  >
                    {session.action.label}
                  </a>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
