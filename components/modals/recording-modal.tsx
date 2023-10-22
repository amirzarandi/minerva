"use client"

import { Dialog, 
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import { useRecording } from "@/hooks/use-recording";

export const RecordingModal = () => {
    const recording = useRecording();

    return (
        <Dialog open={recording.isOpen} onOpenChange={recording.onClose}>
            <DialogContent>
                <DialogHeader className="text-center text-lg font-semibold">
                    <h2>
                        Recording
                    </h2>
                </DialogHeader>
                <div>
                    TODO: Upload Recording
                </div>
            </DialogContent>
        </Dialog>
    )
}
